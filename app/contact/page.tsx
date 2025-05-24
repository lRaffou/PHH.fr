export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <ul className="text-lg space-y-2">
        <li><strong>Adresse :</strong> 10 Av. Marcel Unal, 82000 Montauban</li>
        <li><strong>Téléphone :</strong> 05 63 03 02 33</li>
        <li><strong>Horaires :</strong> Fermé ⋅ Ouvre à 19:00</li>
        <li><strong>Paiements :</strong> Pluxee, Espèce, CB</li>
        <li><a className="text-blue-500 underline" href="https://www.instagram.com/lepetithongkong82" target="_blank">Instagram</a></li>
        <li><a className="text-blue-500 underline" href="https://www.tripadvisor.fr/Restaurant_Review-g187172-d4429700-Reviews-Le_Petit_Hong_Kong" target="_blank">Tripadvisor</a></li>
      </ul>
    </div>
  );
}