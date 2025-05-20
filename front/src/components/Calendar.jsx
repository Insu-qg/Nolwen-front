// src/components/Calendar.jsx
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${import.meta.env.PUBLIC_STRAPI_URL}/api/events?populate=*`);
        const { data } = await response.json();
        
        // Transformer les données Strapi en format FullCalendar
        const formattedEvents = data.map(event => ({
          title: event.title,
          date: event.date,
          color: event.color || '#2c3e50',
          description: event.description,
          pdf: event.pdf?.url || null
        }));
        
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Erreur lors de la récupération des événements:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setShowModal(true);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto relative calendar-container">
      <style>
        {`
          .calendar-container .fc-event {
            cursor: pointer !important;
          }
        `}
      </style>
      <FullCalendar
        buttonText={{
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
          list: "Liste"
        }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={frLocale}
        height="auto"
        eventClick={handleEventClick}
      />

      {showModal && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="text-gray-600 mb-2">
              Date : {formatDate(selectedEvent.startStr)}
            </p>
            <p className="text-gray-700 mb-4">
              {selectedEvent.extendedProps.description}
            </p>
            {selectedEvent.extendedProps.pdf && (
              <a
                href={`${import.meta.env.PUBLIC_STRAPI_URL}${selectedEvent.extendedProps.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-beige text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
              >
                En savoir plus
              </a>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 ml-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
