import ProductCard from "@/components/ProductCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductCard
        avatarText="P"
        title="Product Name"
        subheader="Status - 01/01/2019"
        image="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
        description="This is a brief description of the product that has been configured in the catalog."
        details={[
          "Product Type: Simple",
          "Smartphone Brand X",
          "Characteristics Camera : 12 Mbps",
          "Relationships",
          "Services:",
        ]}
      />
    </main>
  );
}
