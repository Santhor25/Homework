import styles from "./CityList.module.scss";

export default function CityList({ graph, onSelect }) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ciudades</h2>
  
        {Object.values(graph).map(city => (
          <button
            key={city.id}
            className={styles.cityButton}
            onClick={() => onSelect(city.id)}
          >
            {city.name}
          </button>
        ))}
      </div>
    );
  }
  