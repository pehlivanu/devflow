const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  JOB: (id: string) => `/jobs/${id}`,
  JOBS: "/jobs",
  COLLECTION: (id: string) => `/collections/${id}`,
  COLLECTIONS: "/collections",
  COMMUNITY: (id: string) => `/community/${id}`,
};

export default ROUTES;
