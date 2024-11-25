export default function handler(req, res) {
  res.status(200).json([
    {
      name: "John Doe",
      image_url:
        "https://www.hubspot.com/hs-fs/hubfs/Testimonial-lead-gen-1.webp?width=1190&height=800&title=Testimonial-lead-gen-1.webp",
      title: "Chief Executive Officer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nisl nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    },
    {
      name: "Jane Doe",
      image_url:
        "https://islegeeks.com/wp-content/uploads/2024/04/a-man-smilling.jpg",
      title: "Chief Operating Officer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nisl nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    },
    {
      name: "John Smith",
      image_url:
        "https://vocalvideo.com/resources/content/images/size/w1920/2021/09/corporate-testimonial-videos.jpeg",
      title: "Chief Management Officer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nisl nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    },
  ]);
}
