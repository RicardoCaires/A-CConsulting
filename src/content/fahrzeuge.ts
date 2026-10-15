/**
 * Marken und Modelle zum Suchen in der Offertanfrage (15.10.2026, Ricardo: «es wäre cool,
 * wenn man sein Fahrzeug und Modell suchen könnte oder auswählen könnte und falls es nicht
 * vorhanden ist dann selbst eingeben»).
 *
 * Eine Auswahl der in der Schweiz verbreiteten Marken und Modelle, keine vollständige Liste.
 * **Eigene Eingabe ist immer möglich** – was fehlt, schreibt man hinein. Personenwagen,
 * Lieferwagen und Wohnmobile teilen sich `autos`; Motorräder haben eine eigene Liste.
 *
 * QUELLE: `content/source/offertanfrage_de.md`, Abschnitt «Fahrzeuge».
 */

export const autos: Record<string, readonly string[]> = {
  'Alfa Romeo': ['Giulia', 'Junior', 'Stelvio', 'Tonale'],
  Audi: ['A1', 'A3', 'A4', 'A5', 'A6', 'Q2', 'Q3', 'Q4 e-tron', 'Q5', 'Q7', 'Q8', 'e-tron GT'],
  BMW: ['1er', '2er', '3er', '4er', '5er', 'i4', 'i5', 'iX', 'iX1', 'X1', 'X2', 'X3', 'X5'],
  BYD: ['Atto 3', 'Dolphin', 'Seal', 'Seal U'],
  Citroën: ['Berlingo', 'C3', 'C4', 'C5 Aircross', 'Jumper', 'Jumpy'],
  Cupra: ['Born', 'Formentor', 'Leon', 'Tavascan'],
  Dacia: ['Duster', 'Jogger', 'Sandero', 'Spring'],
  Fiat: ['500', '500e', 'Doblò', 'Ducato', 'Panda', 'Tipo'],
  Ford: ['Focus', 'Kuga', 'Mustang Mach-E', 'Puma', 'Ranger', 'Tourneo', 'Transit'],
  Honda: ['Civic', 'CR-V', 'HR-V', 'Jazz', 'ZR-V'],
  Hyundai: ['i10', 'i20', 'i30', 'Ioniq 5', 'Ioniq 6', 'Kona', 'Santa Fe', 'Tucson'],
  Jeep: ['Avenger', 'Compass', 'Renegade', 'Wrangler'],
  Kia: ['Ceed', 'EV6', 'EV9', 'Niro', 'Picanto', 'Sorento', 'Sportage', 'Stonic'],
  'Land Rover': ['Defender', 'Discovery', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport'],
  Mazda: ['CX-30', 'CX-5', 'CX-60', 'Mazda2', 'Mazda3', 'MX-5'],
  'Mercedes-Benz': ['A-Klasse', 'B-Klasse', 'C-Klasse', 'CLA', 'E-Klasse', 'EQA', 'EQB', 'GLA', 'GLB', 'GLC', 'GLE', 'Sprinter', 'Vito'],
  MG: ['MG4', 'MG5', 'HS', 'ZS'],
  Mini: ['Cooper', 'Countryman', 'Clubman'],
  Mitsubishi: ['ASX', 'Eclipse Cross', 'Outlander', 'Space Star'],
  Nissan: ['Juke', 'Leaf', 'Micra', 'Qashqai', 'X-Trail'],
  Opel: ['Astra', 'Corsa', 'Grandland', 'Mokka', 'Movano', 'Vivaro'],
  Peugeot: ['208', '2008', '308', '3008', '5008', 'Boxer', 'Expert', 'Partner'],
  Polestar: ['Polestar 2', 'Polestar 3', 'Polestar 4'],
  Porsche: ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
  Renault: ['Arkana', 'Austral', 'Captur', 'Clio', 'Kangoo', 'Master', 'Mégane', 'Trafic'],
  Seat: ['Arona', 'Ateca', 'Ibiza', 'Leon', 'Tarraco'],
  Škoda: ['Elroq', 'Enyaq', 'Fabia', 'Kamiq', 'Karoq', 'Kodiaq', 'Octavia', 'Scala', 'Superb'],
  Smart: ['#1', '#3', 'fortwo'],
  Subaru: ['Crosstrek', 'Forester', 'Outback', 'XV'],
  Suzuki: ['Ignis', 'S-Cross', 'Swift', 'Vitara'],
  Tesla: ['Model 3', 'Model S', 'Model X', 'Model Y'],
  Toyota: ['Aygo X', 'C-HR', 'Corolla', 'Hilux', 'Proace', 'RAV4', 'Yaris', 'Yaris Cross'],
  Volkswagen: ['Caddy', 'Crafter', 'Golf', 'ID.3', 'ID.4', 'ID.7', 'ID. Buzz', 'Passat', 'Polo', 'T-Cross', 'T-Roc', 'Tiguan', 'Touran', 'Transporter'],
  Volvo: ['EX30', 'EX40', 'V60', 'V90', 'XC40', 'XC60', 'XC90'],
}

export const motorraeder: Record<string, readonly string[]> = {
  Aprilia: [],
  'BMW Motorrad': [],
  Ducati: [],
  'Harley-Davidson': [],
  Honda: [],
  Kawasaki: [],
  KTM: [],
  Piaggio: [],
  Suzuki: [],
  Triumph: [],
  Vespa: [],
  Yamaha: [],
}
