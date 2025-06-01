
import { ActivityImage } from '@/models/Activity';

// Collection des photos téléchargées (anciennes + nouvelles)
export const uploadedImages = [
  "/lovable-uploads/20c0bca8-166a-42ef-8c7f-bab4a782891e.png", // Cérémonie d'investiture président
  "/lovable-uploads/fa31c6f4-a7c9-489a-a8a2-470be16414b8.png", // Salle de classe
  "/lovable-uploads/7baa5553-0fc5-428d-821a-6dc4d3b0c9c5.png", // Groupe étudiants devant bâtiment rouge
  "/lovable-uploads/4c13bf5b-a2f9-4ff5-a115-c6c242cbf628.png", // Groupe d'étudiants intérieur
  "/lovable-uploads/160be3e1-5345-49f9-a4c0-a76bad65174c.png", // Petit groupe étudiants extérieur
  "/lovable-uploads/5d607a03-011e-4166-9274-5f9b28d9a538.png", // Groupe étudiants devant entrée
  "/lovable-uploads/7d101870-b448-4b66-903f-b96f03a4301e.png", // Groupe devant bâtiment rouge
  "/lovable-uploads/c857cd43-bf05-42d3-8abc-301024db7a68.png", // Groupe sous tente
  "/lovable-uploads/9bbfcb4b-0e67-4871-966a-0fc4a070c4fe.png", // Petit groupe sous tente
  "/lovable-uploads/518dab76-260e-406a-9c17-790ab5d70fee.png", // Groupe devant bâtiment jaune
  "/lovable-uploads/dcb08538-7c46-42a7-92d3-4f06007b0de8.png", // Étudiants en classe
  "/lovable-uploads/e71a60ff-f1f1-4129-967a-685807b702d7.png", // Membre féminin en tenue blanche
  "/lovable-uploads/aafe8f4a-7f2f-498e-92ec-3e81cd09aad4.png", // Membre masculin avec lunettes
  "/lovable-uploads/254fd29f-e5ab-4b08-b77c-156d4e5e9528.png", // Petite équipe formelle
  "/lovable-uploads/f70a5dca-15ad-4000-8cfb-9be5ae1cb5bd.png", // Équipe de direction
  "/lovable-uploads/d201e87e-bda7-47b7-b9e9-c759d8af53b1.png", // Groupe à la plage
  "/lovable-uploads/178df4c0-4cee-41e1-b2c9-72deb6e39217.png", // Grande équipe officielle
  "/lovable-uploads/12e35acb-1767-49df-9540-73c0a0c2fe34.png", // Équipe célébrant
  // Nouvelles images ajoutées
  "/lovable-uploads/73c84976-63c2-4aab-98be-a1e38fd1dd8e.png", // Trio de jeunes membres
  "/lovable-uploads/888d393f-f3d5-4912-b0d9-102c2833abcc.png", // Membre en costume rayé avec badge
  "/lovable-uploads/b555021b-9c46-4745-9b5e-3fc22a3185a6.png", // Duo officiel avec écharpes
  "/lovable-uploads/7c8e631b-c3d7-418c-8e1d-8d07d546d1ae.png", // Membre féminin en tenue blanche élégante
  "/lovable-uploads/d8f7264b-caa3-4690-8525-233f27a4ff41.png", // Couple en tenue formelle
  "/lovable-uploads/6edc6c3d-6052-464f-bbc4-40a4d8484633.png", // Groupe de cinq membres mixte
  "/lovable-uploads/0d50e38e-ee9e-4132-844f-ec37dc1ef119.png", // Grande assemblée des membres
  "/lovable-uploads/74bfbd92-ffe7-4f75-825b-7ecfdfdc94bd.png"  // Groupe de six membres en tenue décontractée
];

// Photos spécifiques pour les membres du bureau
export const teamMemberPhotos = uploadedImages;

// Photos pour les activités et événements
export const eventPhotos = uploadedImages;

// Photos pour les galeries
export const galleryPhotos = uploadedImages;

// Photos de membres pour la page équipe
export const memberPhotos = uploadedImages;

// Fonction pour obtenir une image aléatoire dans une collection avec plus de variété
export const getRandomImage = (collection: string[], index: number): string => {
  // Utilise une formule plus complexe pour éviter les répétitions
  const adjustedIndex = (index * 7 + 3) % collection.length;
  return collection[adjustedIndex];
};

// Fonction pour obtenir une image de membre avec plus de variété
export const getMemberImage = (index: number): string => {
  // Rotation différente pour les images de membres
  const adjustedIndex = (index * 5 + 2) % memberPhotos.length;
  return memberPhotos[adjustedIndex];
};

// Fonction pour obtenir une image d'événement
export const getEventImage = (index: number): string => {
  // Rotation spécifique pour les événements
  const adjustedIndex = (index * 3 + 1) % eventPhotos.length;
  return eventPhotos[adjustedIndex];
};

// Fonction pour obtenir une image de galerie
export const getGalleryImage = (index: number): string => {
  return getRandomImage(galleryPhotos, index);
};

// Fonction pour créer des images d'activité conformes à l'interface ActivityImage
export const createMockActivityImages = (activityId: string, count: number = 6): ActivityImage[] => {
  const startIndex = parseInt(activityId, 36) % galleryPhotos.length;
  return galleryPhotos.slice(startIndex, startIndex + count).concat(
    galleryPhotos.slice(0, Math.max(0, count - (galleryPhotos.length - startIndex)))
  ).slice(0, count).map((img, index) => ({
    id: `mock-image-${activityId}-${index}`,
    activityId: activityId,
    src: img,
    caption: `Photo d'événement - ${index + 1}`
  }));
};
