import Image from "next/image";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="vh-100 vw-100 p-5">
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
      <div className="w-100 h-100 d-flex justify-content-end position-relative">
        <div className="bg-light w-75 h-100"></div>
        <div className="w-100 h-100 position-absolute row g-4">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-end justify-content-lg-center align-items-center gap-4 ps-lg-5">
            <h1 className="display-5 fw-bold text-center text-lg-start">
              What our clients say about us
            </h1>

            <div className="position-relative w-100">
              <div key={currentIndex} className="animate-fade">
                <Image
                  src={testimonials[currentIndex].image_url}
                  alt="testimonial"
                  width={479}
                  height={317}
                  className="rounded w-100"
                />
              </div>
              <img
                src="/testimonial-icon.svg"
                alt="testimonial icon"
                className="position-absolute top-0 end-0 translate-middle-y icon-small icon-lg"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex flex-column justify-content-start justify-content-lg-center gap-3">
            <p
              key={`message-${currentIndex}`}
              className="animate-fade text-secondary"
              style={{ maxWidth: "50ch" }}
            >
              {testimonials[currentIndex].message}
            </p>
            <div className="d-flex flex-column gap-2">
              <p
                key={`name-${currentIndex}`}
                className="animate-fade fs-4 fw-bold mb-0"
              >
                {testimonials[currentIndex].name}
              </p>
              <p
                key={`title-${currentIndex}`}
                className="animate-fade fs-6 fw-medium mb-0"
              >
                {testimonials[currentIndex].title}
              </p>
            </div>
            <div className="d-flex gap-3">
              <img
                src="./left-arrow.svg"
                alt="left arrow"
                className="pointer"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                onClick={handlePrev}
              />
              <img
                src="./right-arrow.svg"
                alt="right arrow"
                className="pointer"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getAllTestimonials`
  );
  const testimonials = await res.json();
  return {
    props: {
      testimonials,
    },
  };
};
