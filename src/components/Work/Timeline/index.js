import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'December 2024 - Present',
      title: 'CGBZ Society - City University',
      description: [
        'Working as a developer at <b>City University</b>, contributing to the design and development of modern web applications using <b>React</b>, <b>JavaScript</b>, and backend technologies',
        'Building responsive and user-friendly interfaces while improving application performance and scalability',
        'Collaborating on real-world projects, handling debugging, feature implementation, and optimization of web systems',
      ],
      expanded: false,
    },
    {
      date: 'Present',
      title: 'Hex Software (MERN Stack Developer Intern)',
      description: [
        'Working as a <b>MERN Stack Developer Intern</b>, building full-stack web applications using <b>MongoDB</b>, <b>Express.js</b>, <b>React</b>, and <b>Node.js</b>',
        'Developing and integrating RESTful APIs, handling both frontend and backend logic efficiently',
        'Managing databases including <b>MongoDB</b> and <b>PostgreSQL</b>, ensuring data integrity and optimized queries',
        'Implementing responsive UI and following best practices while using <b>Git</b> for version control',
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
