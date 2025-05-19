import React from 'react';

const QuoteSection = ({ mode }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "300px", // You can increase this height if needed
        overflow: "hidden",
        
      }}
    >
      <img
       src={process.env.PUBLIC_URL + '/inspiration.jpg'}
        alt="Inspiration"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
    opacity: 0.7,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent overlay
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <blockquote
          style={{
            fontStyle: "italic",
            fontSize: "1.5rem",
            lineHeight: "1.4",
            
          }}
        >
          "The only way to do great work is to love what you do."  
          <br />– Steve Jobs
        </blockquote>
      </div>
    </div>
  );
};

export default QuoteSection;
