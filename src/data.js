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
    startDate: "",
    endDate: "",
    show: false,
  },
  {
    id: uuid(),
    school: "School of spacecraft flying",
    degree: "Certification for professional spacecraft pilot",
    location: "Some random state",
    startDate: "",
    endDate: "",
    show: false,
  }
  ]
}

export default data