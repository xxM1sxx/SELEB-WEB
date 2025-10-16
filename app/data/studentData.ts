export interface StudentMember {
  name: string;
  position: string;
  topik_riset: string;
  education: string;
  supervisor: string;
  image: string;
  link_penelitian: string;
}

export const studentMembers: StudentMember[] = [
  {
    name: "Dr. Nadiatus Silmi, S.Si., M.Si.",
    position: "Postdoctoral",
    topik_riset: "Mesporous Silica from Agricultural Waste and Industrial Byproducts",
    education: "Doctor of Philosophy in Chemistry",
    supervisor: "-",
    image: "/foto-student/silmi.jpg",
    link_penelitian: "https://scholar.google.com/citations?user=x44WWFsAAAAJ&hl=id"
  },
  {
    name: "Dr. John Philia Yuliyandjaja, S.T., M.T.",
    position: "Postdoctoral",
    topik_riset: "Development of Film-Based Piezoelectric Sensor for Parkinson Detection",
    education: "Doctor of Mechanical Engineering, Universitas Diponegoro, Indonesia",
    supervisor: "Swasmi Purwajanti, S.T., M.Sc., Ph.D.",
    image: "/foto-student/yaya.jpg",
    link_penelitian: "https://scholar.google.com/citations?user=gYLd-C8AAAAJ&hl=en"
  },
  {
    name: "Thasia Gian Pavita, M.Si.",
    position: "Researcher Assistant",
    topik_riset: "Development of Flexible Strain-Stress Sensor Based on PVA/Borate/CNC/CNT Hydrogel Polymer",
    education: "Master’s Degree in Chemistry, Universitas Pendidikan Indonesia",
    supervisor: "-",
    image: "/foto-student/thasia.jpg",
    link_penelitian: "-"
  },
  {
    name: "Fatih Nurrobi Alanshori",
    position: "MBKM",
    topik_riset: "(Hardware System Integration) - Application of Artificial Intelligence for Temperature and Humidity Control in Internet of Things-based Cooler Boxes",
    education: "Undergraduate Student in Computer Engineering, Universitas Pendidikan Indonesia",
    supervisor: "Nanda Nagara, M.Eng.",
    image: "/foto-student/fatih.jpeg",
    link_penelitian: "-"
  },
  {
    name: "Muhammad Bilal Mardhiyyano Azizi",
    position: "MBKM",
    topik_riset: "(IoT System Integration) - Application of Artificial Intelligence for Temperature and Humidity Control in Internet of Things-based Cooler Boxes",
    education: "Undergraduate Student in Computer Engineering, Universitas Pendidikan Indonesia",
    supervisor: "Nanda Nagara, M.Eng.",
    image: "/foto-student/bilal.jpg",
    link_penelitian: "-"
  },
  {
    name: "Angela Putri Kurnianta",
    position: "MBKM",
    topik_riset: "Development of Integrated Flexi Force Sensors on Bacterial Nanocellulose Substrates for Detecting Body Balance Disorders", 
    education: "Undergraduate Student in Biomedical Engineering, Institut Teknologi Sumatera, Indonesia",
    supervisor: "Athanasia Amanda Septevani, Ph.D.",
    image: "/foto-student/angela.jpeg",
    link_penelitian: "-"
  },
  {
    name: "Meri Tiani",
    position: "MBKM",
    topik_riset: "Development of pH-Responsive Smart Packaging Based on Alginate for Food Safety", 
    education: "Undergraduate Student in Physics, Universitas Jenderal Soedirman, Indonesia",
    supervisor: "-",
    image: "/foto-student/meri.jpg",
    link_penelitian: "-"
  },
  {
    name: "Zidan Rafif Pratama",
    position: "Magang Mandiri",
    topik_riset: "Spoiled Food Detector Based Gas Amonia, CO2, and Methane", 
    education: "Undergraduate Student in Mechatronics Engineering, Politeknik Caltex Riau, Indonesia",
    supervisor: "Dr. Ir. Rilo Berdin Taqriban, S.T., M.T.",
    image: "/foto-student/zidan.jpg",
    link_penelitian: "-"
  },
];