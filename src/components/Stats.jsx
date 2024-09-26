export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your travel list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const porcentage = Math.round((numPacked / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {porcentage === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${porcentage} %)`}
      </em>
    </footer>
  );
}
