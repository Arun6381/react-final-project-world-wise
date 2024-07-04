import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { country: countryName, emoji } = country;

  const flagemojiToPNG = (emoji) => {
    const countryCode = Array.from(emoji, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${countryName} flag`}
      />
    );
  };

  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(emoji)}</span>
      <span>{countryName}</span>
    </li>
  );
}

export default CountryItem;
