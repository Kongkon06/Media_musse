import DealCard from "./DealCard";

const deals = [
  {
    id: 1,
    title: "Fender Player Stratocaster Electric Guitar",
    image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=800&q=80",
    originalPrice: 799.99,
    dealPrice: 649.99,
    endDate: new Date(Date.now() + 172800000), // 48 hours from now
  },
  {
    id: 2,
    title: "Roland TD-17KVX V-Drums Electronic Drum Set",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
    originalPrice: 599.99,
    dealPrice: 299.99,
    endDate: new Date(Date.now() + 86400000), // 24 hours from now
  },
  {
    id: 3,
    title: "Yamaha P-125 Digital Piano",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
    originalPrice: 699.99,
    dealPrice: 549.99,
    endDate: new Date(Date.now() + 259200000), // 72 hours from now
  },
  {
    id: 4,
    title: "Martin D-28 Acoustic Guitar",
    image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&w=800&q=80",
    originalPrice: 999.99,
    dealPrice: 799.99,
    endDate: new Date(Date.now() + 345600000), // 96 hours from now
  },
];

const Deals = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-deal-purple/5 to-deal-orange/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-deal-heading mb-4 animate-float bg-gradient-to-r from-deal-purple to-deal-orange bg-clip-text text-transparent">
            Hot Deals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Limited time offers on premium instruments. Don't miss out on these incredible savings!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;