import { Button } from "@nextui-org/button";

export const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-white">
      <div className="flex items-center justify-between py-3 max-w-5xl mx-auto mb-10 mt-10">
        <div className="flex items-center gap-4">
          <img src="Logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center gap-4">
          <Button color="primary" variant="bordered">
            <span>Properly Indonesia</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <img src="/asset/location.png" alt="Location" className="h-6" aria-label="Location icon" />
=======
    <div>
      <div className="flex items-center justify-between py-3 max-w-5xl mx-auto mb-10 mt-10">
        <div className="flex items-center gap-4">
            <img src="Logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center gap-4">
          <Button color="primary" variant="bordered">
            <li>Properly Indonesia</li>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <img src="/asset/location.png" alt="Location" className="h-6" />
>>>>>>> af8608d (first commit)
          <p className="text-default-600">Yogyakarta, Indonesia</p>
        </div>
      </div>
      <div className="relative">
        <img
          src="/asset/Frame.png"
          alt="House"
          className="w-full h-auto object-cover"
        />
      </div>
<<<<<<< HEAD
    </footer>
=======
    </div>
>>>>>>> af8608d (first commit)
  );
};