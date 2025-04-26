// src/components/Calendar.jsx
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';




export default function Calendar() {
  return (
    <div className="max-w-4xl mx-auto">
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
        events={[
          { title: 'Formation UX', date: '2025-04-18' },
          { title: 'Rendez-vous client', date: '2025-04-22' },
        ]}
        locale={frLocale}
        height="auto"
      />
    </div>
  );
}
