
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";


async function fetchAPI(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `API error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}

export function getImageUrl(path) {
  if (!path) return "";

  if (path.startsWith("http")) return path;

  // remove /api from base
  const base = API_BASE_URL.replace("/api", "");

  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}


export const api = {
  getHeroSliders: () => fetchAPI("/hero-sliders"),

  getGalleryImages: (category) =>
    fetchAPI(
      "/gallery-images"
    ),
    // fetchAPI(
    //   `/gallery-images${
    //     category && category !== "All" ? `?category=${category}` : ""
    //   }`
    // ),

  getFacilities: () => fetchAPI("/facilities"),

  getActivities: () => fetchAPI("/activities"), 

  getNotices: (upcoming) =>
    fetchAPI(`/notices${upcoming ? "?upcoming=true" : ""}`),
};