// src/components/FeaturedProducts.tsx
export default function FeaturedProducts() {
  return (
    <section style={{ padding: "2rem" }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Featured Products</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {[1, 2, 3].map((id) => (
          <div key={id} style={{ border: "1px solid #ccc", padding: "1rem", flex: "1" }}>
            <div style={{ height: "150px", backgroundColor: "#eee" }}></div>
            <p>Product {id}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
