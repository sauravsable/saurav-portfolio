import Link from "next/link";
import { socialMedia } from "../../contents/socialMedia";
import { name } from "../../contents/staticData";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              {name}
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialMedia.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
