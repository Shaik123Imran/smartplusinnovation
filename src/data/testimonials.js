export const testimonials = [
  {
    id: 1,
    name: 'Mahira Kounain',
    role: 'Junior Python Developer',
    company: 'TCS',
    content:
      'Joined EduGram for Python full stack training. Trainers explained from basics and helped a lot in projects. Placement support was also good. Happy that I got selected in TCS as a Junior Python Developer.',
    rating: 5,
    image: 'MK',
    program: 'Python Full Stack',
  },
  {
    id: 2,
    name: 'Zainab Mehreen',
    role: 'Power BI Developer',
    company: 'EY',
    content:
      'I took Power BI course here. Sessions were practical and easy to understand even for non-technical students. Mock interviews helped me gain confidence before attending interviews and got placed as a Power BI Developer at EY.',
    rating: 5,
    image: 'ZM',
    program: 'Power BI',
  },
  {
    id: 3,
    name: 'Richard Shyam',
    role: 'Java Trainee',
    company: 'Wipro',
    content:
      'EduGram Technologies helped me improve my Java coding and interview skills. Faculty was very supportive throughout the course. Good place for freshers looking for IT jobs.',
    rating: 5,
    image: 'RS',
    program: 'Java Development',
  },
  {
    id: 4,
    name: 'Reddy Vamsi',
    role: 'Data Analyst',
    company: 'Deloitte',
    content:
      'Completed Data Science course from EduGram and honestly it helped me a lot in understanding real-time industry concepts. Trainers focused on practical implementation, projects, SQL, Python and interview preparation sessions regularly. I also attended mock interviews conducted by the placement team which improved my confidence. Happy to start my career as a Data Analyst.',
    rating: 5,
    image: 'RV',
    program: 'Data Science',
  },
  {
    id: 5,
    name: 'Masrood Ahmed',
    role: 'Cyber Security Associate',
    company: 'MotherSon Technologies',
    content:
      'Cyber security training was very informative and practical. Trainers shared industry knowledge and interview questions regularly. Overall good learning experience.',
    rating: 5,
    image: 'MA',
    program: 'Cyber Security',
  },
  {
    id: 6,
    name: 'Shaik Zara',
    role: 'Sales & Marketing Executive',
    company: 'NeoDove',
    content:
      'I joined Sales and Marketing program after graduation. Classes were interactive and trainers explained concepts with real examples. Placement team guided me well.',
    rating: 5,
    image: 'SZ',
    program: 'Sales & Marketing',
  },
  {
    id: 7,
    name: 'Revanya Kumar',
    role: 'Generative AI Intern',
    company: 'NTT DATA',
    content:
      'Generative AI course was really interesting and updated with latest tools. I learned prompt engineering and AI applications in a simple way. Great support from mentors.',
    rating: 5,
    image: 'RK',
    program: 'Generative AI',
  },
  {
    id: 8,
    name: 'Tousif Khan',
    role: 'Software Engineer Trainee',
    company: 'Mindtree',
    content:
      'One thing I liked about EduGram Technologies is the friendly learning environment and practical approach towards teaching. Trainers not only covered technical concepts but also guided us on communication skills, resume preparation and interview handling. Daily coding practice sessions and assignments helped me improve a lot. Placement support team was also active till the interview process was completed.',
    rating: 5,
    image: 'TK',
    program: 'Software Engineering',
  },
  {
    id: 9,
    name: 'Yamala Kiran',
    role: 'Junior Technical Associate',
    company: 'Mphasis',
    content:
      'Very good institute for beginners who want to start career in IT. Java and SQL classes were clear and easy to follow. Placement assistance was helpful till the end.',
    rating: 5,
    image: 'YK',
    program: 'Java & SQL',
  },
  {
    id: 10,
    name: 'Biswajith',
    role: 'Data Science Associate',
    company: 'AstraZeneca',
    content:
      'Before joining EduGram I had very little knowledge about Data Science. The trainers explained concepts step by step and provided hands on practice with real datasets and projects. The learning material, assignments and mock interviews were useful during placement preparation. Overall a very good platform for students and freshers who want to enter the IT industry.',
    rating: 5,
    image: 'B',
    program: 'Data Science',
  },
]

export const getRandomTestimonials = (count = 5) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
