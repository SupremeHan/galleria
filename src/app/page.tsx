import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/b8c70756-52b7-4291-bf94-2fd00d316bae-e0he6w.png",
  "https://utfs.io/f/dd386547-d210-4b26-a4e6-42ebecad6f08-m56p93.png",
  "https://utfs.io/f/ae17746e-bb17-4323-ab8b-09322c661f00-naxuwp.png",
  "https://utfs.io/f/a82f936a-477b-49dd-ab9d-46a121c49bb9-ijvnt4.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
