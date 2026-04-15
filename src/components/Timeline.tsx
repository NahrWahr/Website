interface TimelineEvent {
  id: string;
  date: string;
  iconPath?: string;
  content: React.ReactNode;
}

const events: TimelineEvent[] = [
  {
    id: 'uci',
    date: 'Sep 2025 - Present',
    content: (
      <>
        Student Researcher at <strong>UC Irvine</strong>. Automating transistor-level analog block design via Graph Neural Networks for the FALCON project at HIE lab. Designed VCOs, LNAs, and mixers in Spectre.
      </>
    )
  },
  {
    id: 'neocambrian',
    date: '2024 - 2025',
    content: (
      <>
        Engineer at <strong>NeoCambrian</strong>. <em>(Add specific role and project details here)</em>
      </>
    )
  },
  {
    id: 'inspecity',
    date: '2023 - 2024',
    content: (
      <>
        Engineer at <strong>Inspecity</strong>. <em>(Add specific role and project details here)</em>
      </>
    )
  },
  {
    id: 'iitk',
    date: '2019 - 2023',
    content: (
      <>
        B.S. Physics at <strong>IIT Kanpur</strong>. Focus on analog and mixed-signal design, control systems, and multi-sensor perception.
      </>
    )
  }
];

export default function Timeline() {
  return (
    <div className="timeline" role="list" aria-label="History and education timeline">
      {events.map((event) => (
        <div key={event.id} className="timeline-item" role="listitem">
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-icon" aria-hidden="true">
            {event.iconPath ? (
              <img src={event.iconPath} alt="" />
            ) : (
              <div className="timeline-icon-placeholder" />
            )}
          </div>
          <div className="timeline-content">
            {event.content}
          </div>
        </div>
      ))}
    </div>
  );
}
