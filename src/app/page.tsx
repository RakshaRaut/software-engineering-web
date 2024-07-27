import ProductCard from "@/components/ProductCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductCard
        avatarText="P"
        title="Product Name"
        subheader="Status - 01/01/2019"
        image="https://example.com/image.jpg"
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
