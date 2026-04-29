/**
 * Strapi API Client
 *
 * This module provides functions to fetch data from the Strapi CMS backend.
 * Set NEXT_PUBLIC_STRAPI_API_URL in your .env.local file.
 */

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface Feature {
  id: number;
  documentId: string;
  name: string;
  description: string;
  order: number;
  icon?: {
    url: string;
    alternativeText?: string;
  };
}

interface TeamMember {
  id: number;
  documentId: string;
  name: string;
  role: string;
  bio: string;
  photo?: {
    url: string;
    alternativeText?: string;
  };
}

/**
 * Fetch features from Strapi
 */
export async function getFeatures(): Promise<Feature[]> {
  try {
    const response = await fetch(`${STRAPI_API_URL}/api/features?populate=*&sort=order:asc`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.warn('Failed to fetch features from Strapi');
      return [];
    }

    const result: StrapiResponse<Feature[]> = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching features:', error);
    return [];
  }
}

/**
 * Fetch team members from Strapi
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch(`${STRAPI_API_URL}/api/team-members?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.warn('Failed to fetch team members from Strapi');
      return [];
    }

    const result: StrapiResponse<TeamMember[]> = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

/**
 * Get full URL for Strapi media assets
 */
export function getStrapiMediaUrl(path: string | undefined): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('http')) return path;
  return `${STRAPI_API_URL}${path}`;
}

/**
 * Fetch a single page by slug (for dynamic pages)
 */
export async function getPage(slug: string) {
  try {
    const response = await fetch(
      `${STRAPI_API_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const result: StrapiResponse<Record<string, unknown>[]> = await response.json();
    return result.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}
