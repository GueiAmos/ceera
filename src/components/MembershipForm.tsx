
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthdate: '',
    gender: '',
    occupation: '',
    address: '',
    motivation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Formulaire d'adhésion envoyé avec succès!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthdate: '',
        gender: '',
        occupation: '',
        address: '',
        motivation: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="font-medium text-sm">
            Prénom <span className="text-red-500">*</span>
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Votre prénom"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="font-medium text-sm">
            Nom <span className="text-red-500">*</span>
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="font-medium text-sm">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="font-medium text-sm">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="birthdate" className="font-medium text-sm">
            Date de naissance <span className="text-red-500">*</span>
          </label>
          <Input
            id="birthdate"
            name="birthdate"
            type="date"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="gender" className="font-medium text-sm">
            Genre <span className="text-red-500">*</span>
          </label>
          <Select 
            value={formData.gender} 
            onValueChange={(value) => handleSelectChange(value, 'gender')}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Homme</SelectItem>
              <SelectItem value="female">Femme</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label htmlFor="occupation" className="font-medium text-sm">
            Occupation <span className="text-red-500">*</span>
          </label>
          <Input
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Étudiant, élève, professionnel, etc."
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="address" className="font-medium text-sm">
          Adresse <span className="text-red-500">*</span>
        </label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Votre adresse complète"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="motivation" className="font-medium text-sm">
          Motivation <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          placeholder="Pourquoi souhaitez-vous adhérer au CEERA?"
          rows={4}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full md:w-auto bg-ceera-orange hover:bg-ceera-brown"
      >
        {isSubmitting ? "Envoi en cours..." : "Soumettre ma demande d'adhésion"}
      </Button>
    </form>
  );
};

export default MembershipForm;
