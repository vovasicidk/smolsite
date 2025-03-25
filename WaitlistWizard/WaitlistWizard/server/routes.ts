import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { waitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for waitlist
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate request body using the waitlist schema
      const validatedData = waitlistSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      const { fullName, email, company, wantsUpdates } = validatedData.data;
      
      // Check if the email is already in the waitlist
      const existingEntry = await storage.getWaitlistEntryByEmail(email);
      if (existingEntry) {
        return res.status(409).json({ 
          message: "This email is already on our waitlist"
        });
      }
      
      // Store the waitlist entry
      const waitlistEntry = await storage.addToWaitlist({
        fullName,
        email,
        company,
        wantsUpdates,
      });
      
      return res.status(201).json({ 
        message: "Successfully added to waitlist", 
        data: waitlistEntry 
      });
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Get all waitlist entries - admin endpoint
  app.get("/api/waitlist", async (req, res) => {
    try {
      const entries = await storage.getWaitlistEntries();
      return res.status(200).json({ data: entries });
    } catch (error) {
      console.error("Error retrieving waitlist entries:", error);
      return res.status(500).json({ 
        message: "An error occurred while retrieving waitlist entries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
