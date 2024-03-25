import { v4 as uuid } from "uuid";

const data = 
{
  personalInfo: {
    name: "Nikola Milinkovic",
    email: "randomemail@gmail.com",
    phone: "+381 63 1202 222",
    address: "Random street name",
  },
  educationInfo: [{
    id: uuid(),
    school: "Private School for bird watching",
    degree: "Certification for professional bird watching - CPBW",
    location: "Wonderland Street 56, Rainbow City, Sky",
    startDate: "01/01/2024",
    endDate: "01/01/2024",
    show: false,
  },
  {
    id: uuid(),
    school: "School of spacecraft flying",
    degree: "Certification for professional spacecraft pilot",
    location: "Some random state",
    startDate: "01/01/2024",
    endDate: "01/01/2024",
    show: false,
  }
  ],
  experienceInfo: [
    {
      id: uuid(),
      company: "The Rat Chasers",
      position: "Lead rat chaser",
      startDate: "01/01/2024",
      endDate: "01/01/2024",
      location: "In the sewers",
      description: "Chased them rats all day, good barbecue.. o.o",
      show: false,
    }
  ]
}

export default data