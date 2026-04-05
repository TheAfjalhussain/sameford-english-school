require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const { sequelize, Admin, HeroSlider, 
  ImageGallery, Facility, Activity, Notice,
} = require('../models');

async function seed() {
  console.log('Starting database seed...');
  await sequelize.sync({ force: true });
  console.log('Tables created.');

  // Admin
  await Admin.create({ username: 'admin', email: 'admin@school.com', password: 'admin1234', role: 'superadmin' });
  console.log('Admin created: admin / admin123');

  // Hero Sliders
  await HeroSlider.bulkCreate([
    { imageUrl: 'https://media.istockphoto.com/id/1384305179/photo/school-facade-exterior-3d-illustration.jpg?s=612x612&w=0&k=20&c=aoooB4XMTc9syPNeG0aR-gttZVlfAmak8WxY9wxcvDo=', title: 'Dummy International School', subtitle: 'Dummy International School in india is a beacon of educational excellence.', buttonText: 'Apply for Admission', displayOrder: 0 },
    { imageUrl: 'https://media.istockphoto.com/id/1847784988/photo/293.jpg?s=612x612&w=0&k=20&c=Z_nwOLyqrSPrh4yowDp-29KamuPljt1KMDu6OIawYVc=', title: 'Dummy International School', subtitle: 'Recognized as the best ICSE school in india, nurturing environment for academic rigor.', buttonText: 'Apply for Admission', displayOrder: 1 },
    { imageUrl: 'https://media.istockphoto.com/id/1464533610/photo/sunny-elementary-campus.jpg?s=612x612&w=0&k=20&c=KUBXyKkvH8v6XqNuzassUqs0mLqmqJ03pbrU1ALhDGs=', title: 'Dummy International School', subtitle: 'Where academic rigor meets character development.', buttonText: 'Apply for Admission', displayOrder: 2 }
  ]);

  // Gallery Images
  await ImageGallery.bulkCreate([
    { category: 'Academics', imageUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 0 },
    { category: 'Sports', imageUrl: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 2 },
    { category: 'Arts', imageUrl: 'https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 3 },
    { category: 'Arts', imageUrl: 'https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 4 },
    { category: 'Academics', imageUrl: 'https://images.pexels.com/photos/5427670/pexels-photo-5427670.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 6 },
    { category: 'Events', imageUrl: 'https://images.pexels.com/photos/8197528/pexels-photo-8197528.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 7 },
    { category: 'Arts', imageUrl: 'https://images.pexels.com/photos/8199167/pexels-photo-8199167.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 8 },
    { category: 'Academics', imageUrl: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 9 },
    { category: 'Arts', imageUrl: 'https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 10 },
    { category: 'Sports', imageUrl: 'https://images.pexels.com/photos/7092616/pexels-photo-7092616.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 11 }
  ]);

  // Facilities
  await Facility.bulkCreate([
    { title: 'Modern Classrooms', description: 'Smart boards and digital learning tools', category: 'Academics', imageUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 0 },
    { title: 'Science Labs', description: 'Fully equipped physics, chemistry, and biology labs', category: 'Sports', imageUrl: 'https://images.pexels.com/photos/7092616/pexels-photo-7092616.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 1 },
    { title: 'Sports Complex', description: 'Indoor and outdoor sports facilities', category: 'Sports', imageUrl: 'https://images.pexels.com/photos/7092616/pexels-photo-7092616.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 2 },
    { title: 'Library', description: 'Extensive collection and digital resources', category: 'Sports', imageUrl: 'https://images.pexels.com/photos/7092616/pexels-photo-7092616.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 3 }
  ]);

  // Activities
  await Activity.bulkCreate([
    { title: 'Modern Classrooms', description: 'Smart boards and digital learning tools', category: 'Academics', imageUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 0 },
    { title: 'Science Labs', description: 'Fully equipped physics, chemistry, and biology labs', category: 'Sports', imageUrl: 'https://images.pexels.com/photos/7092616/pexels-photo-7092616.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 1 },
    { title: 'Sports Complex', description: 'Indoor and outdoor sports facilities', category: 'Sports', imageUrl: 'https://images.pexels.com/photos/7092616/pexels-photo-7092616.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 2 },
    { title: 'Library', description: 'Extensive collection and digital resources', category: 'Sports', imageUrl: 'https://images.pexels.com/photos/7092616/pexels-photo-7092616.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', displayOrder: 3 }
  ]);

  // Calendar Events
  await Notice.bulkCreate([
    { title: 'Annual Science Fair 2025', description: 'Students showcase innovative projects in physics, chemistry, and biology.', date: 'April 15, 2025', startTime: '10:00 AM', endTime: '3:00 PM', category: 'Academic', displayOrder: 0 },
    { title: 'Inter-House Sports Championship', description: 'Three days of competitive sports featuring all major athletic events.', date: 'April 20-22, 2025', startTime: '8:00 AM', endTime: '5:00 PM', category: 'Sports',  displayOrder: 1 },
    { title: 'Spring Cultural Festival', description: 'A celebration of diversity through music, dance, and art performances.', date: 'May 10, 2025', startTime: '6:00 PM', endTime: '9:00 PM', category: 'Cultural', displayOrder: 2 },
    { title: 'Robotics Workshop Series', description: 'Hands-on robotics programming and design workshops for all levels.', date: 'April 25 - May 2, 2025', startTime: '3:30 PM', endTime: '5:30 PM', category: 'Technology', displayOrder: 3 },
    { title: 'Student Art Exhibition', description: 'Showcasing the creative talents of our students across all art forms.', date: 'May 15-20, 2025', startTime: '9:00 AM', endTime: '4:00 PM', category: 'Arts', displayOrder: 4 },
    { title: 'Community Service Day', description: 'Students engage in meaningful community service projects throughout the city.', date: 'April 12, 2025', startTime: '9:00 AM', endTime: '3:00 PM', category: 'Community', displayOrder: 5 },
  ]);
}
seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
