export default function Experience({ experience }) {
  return (
    <div>
      <div className="experience card">
        {experience.map((item, i) => {
          return (
            <div key={i}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
