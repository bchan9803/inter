    // lib/prisma.ts
    import { PrismaClient } from '@prisma/client';

    declare global {
      // Allow `globalThis` to have a `prisma` property for type safety
      var prisma: PrismaClient | undefined;
    }

    let prisma: PrismaClient;

    if (process.env.NODE_ENV === 'production') {
      prisma = new PrismaClient();
    } else {
      // In development, store on globalThis to prevent multiple instances with hot-reloading
      if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient();
      }
      prisma = globalThis.prisma;
    }

    export default prisma;