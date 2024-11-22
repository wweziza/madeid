import { Button } from "@nextui-org/button";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between py-3 max-w-5xl mx-auto mb-10">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img src="Logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Button color="primary" variant="bordered">
            <li>Properly Indonesia</li>
          </Button>
        </div>
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src="/asset/location.png" alt="Location" className="h-6" aria-label="Location icon" />
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
    </footer>
  );
};