
// Collection des photos téléchargées
export const uploadedImages = [
  "/lovable-uploads/b5f36c7b-f7c6-432f-8cd9-71c93bbc0d82.png",
  "/lovable-uploads/1b8de120-30a4-4eda-a7bd-e86f64c88e86.png",
  "/lovable-uploads/9c78cdbb-069b-419d-a9af-846ebaf59b71.png",
  "/lovable-uploads/642ffc21-7b4b-4ab8-bdd5-1ba7b0e51b2d.png",
  "/lovable-uploads/67cf9d5b-3fee-490b-8a56-1e30d50de6d4.png",
  "/lovable-uploads/080b68f9-864f-493c-8bfe-1d7cd1d52d8e.png",
  "/lovable-uploads/a5aaa899-ad03-48f5-b3c7-58175e1476b2.png",
  "/lovable-uploads/6c9e924b-ca18-4b13-89f3-678780fbf2c1.png",
  "/lovable-uploads/15f60297-c168-438d-ad1d-a3c325a0ca1a.png",
  "/lovable-uploads/86194ff8-5bf3-43dd-999d-e76af4080581.png",
  "/lovable-uploads/f5916ff0-aea0-49db-820f-1a003af772fe.png",
  "/lovable-uploads/df140c24-c375-4ca1-910e-703a6bb1e21d.png",
  "/lovable-uploads/7c0f7163-9bb6-4a53-99e9-087ee5d1e292.png",
  "/lovable-uploads/3a75fdb0-15ab-46c5-9978-203064a55dbb.png",
  "/lovable-uploads/d2dd2976-0330-42bb-b454-bc409c0c76d3.png",
  "/lovable-uploads/bdbc8010-8fc4-434e-a34f-0a9e685a4d25.png",
  "/lovable-uploads/fb8d282c-44b7-4398-a3ec-a4da5a05df4d.png",
  "/lovable-uploads/aedcec36-ca50-4232-92f4-e7d050f6e2e7.png"
];

// Photos spécifiques pour les membres du bureau
export const teamMemberPhotos = uploadedImages;

// Photos pour les activités et événements
export const eventPhotos = uploadedImages;

// Photos pour les galeries
export const galleryPhotos = uploadedImages;

// Photos de membres pour la page équipe
export const memberPhotos = uploadedImages;

// Fonction pour obtenir une image aléatoire dans une collection
export const getRandomImage = (collection: string[], index: number): string => {
  return collection[index % collection.length];
};

// Fonction pour obtenir une image de membre
export const getMemberImage = (index: number): string => {
  return getRandomImage(memberPhotos, index);
};

// Fonction pour obtenir une image d'événement
export const getEventImage = (index: number): string => {
  return getRandomImage(eventPhotos, index);
};

// Fonction pour obtenir une image de galerie
export const getGalleryImage = (index: number): string => {
  return getRandomImage(galleryPhotos, index);
};

// Fonction pour créer des images d'activité conformes à l'interface ActivityImage
export const createMockActivityImages = (activityId: string, count: number = 6) => {
  return galleryPhotos.slice(0, count).map((img, index) => ({
    id: `mock-image-${activityId}-${index}`,
    activityId: activityId,
    src: img,
    caption: `Photo d'événement - ${index + 1}`
  }));
};
