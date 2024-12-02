import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ['/browse', '/course-preview/(.*)'], // Adjust based on which routes should allow unauthenticated access
});

export const config = {
  matcher: [
    // Apply middleware to all routes except specific public/static paths
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run middleware for API and tRPC routes
    '/(api|trpc)(.*)',
  ],
};
