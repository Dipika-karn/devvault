import { Search, Plus } from "lucide-react";


export default function HeroDashboard() {

 const sidebarItems = [
  "Dashboard",
  "Resources",
  "Collections",
  "Favorites",
  "Tags",
  "Notes",
  ];

  const resources = [
  {
    title: "React Documentation",
    type: "Docs",
  },
  {
    title: "Tailwind CSS Docs",
    type: "Docs",
  },
  {
    title: "JavaScript Course",
    type: "Article",
  },
  {
    title: "Next.js GitHub",
    type: "GitHub",
  },
  {
    title: "Design Systems",
    type: "Article",
  },
];

const categoryColors = {
  Docs: "--docs",
  GitHub: "--github",
  YouTube: "--youtube",
  Article: "--article",
  Notes: "--notes",
  Snippet: "--snippet",
};

  return (
    <div className=" min-h-[360px] sm:min-h-[420px]overflow-hidden rounded-2xl border border-(--border) bg-(--background-secondary) shadow-(--shadow-soft)">
         {/* Header */}
      <div className="flex items-center justify-between border-b border-(--border) px-3 py-3 sm:px-4">
          <span className="text-sm font-semibold text-(--text)">
            DevVault
          </span>
            <div className="flex items-center gap-3">
                 <Search
                   size={16}
                   className="text-(--text-muted)"
                 />
                 

                   <Plus
                     size={16}
                     className="text-(--text-secondary)"
                   />
            </div>
      </div>

      {/* Dashboard Body */}

      <div className="flex">

         {/* Sidebar */}
            <aside  className="hidden w-40 shrink-0 border-r border-(--border) bg-(--sidebar) p-3 md:block">
                {sidebarItems.map((item) => (
                   <div
                       key={item}
                       className={
                         item === "Dashboard"
                           ? "rounded-md bg-(--primary-bg) px-3 py-2 text-x font-medium text-(--primary-light)"
                           : "rounded-md px-3 py-2 text-xs text-(--text-secondary) "
                       }
                     >
                     {item}
                   </div>
                  ))}
                 </aside>
                
                  <main className="min-w-0 flex-1 p-3 sm:p-4">
                         
                          {/* Search */}
                         <div className="flex items-center gap-2 rounded-lg border border-(--border) bg-(--card) px-3 py-2">
  
                            <Search
                            size={16}
                            className="text-(--text-muted)"
                            />

                            <span className="text-xs text-(--text-muted)">
                            Search resources...
                            </span>

                        </div>

                          {/* Resource Cards */}
                            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {resources.map((resource) => (
                                       <div
                                         key={resource.title}
                                         className="rounded-lg border border-(--border) bg-(--card) p-3 transition-colors hover:border-(--border-light)"
                                         >
                                                <p className="text-xs font-medium text-(--text)">
                                                  {resource.title}
                                                 </p>

                                                <div className="flex items-center gap-1">
                                                    <span
                                                        className="h-1.5 w-1.5 rounded-full"
                                                        style={{
                                                          backgroundColor: `var(${categoryColors[resource.type]})`,
                                                        }}
                                                      />

                                                   <span className="mt-2 block text-[10px] text-(--text-muted)">
                                                      {resource.type}
                                                     </span>
                                                </div>
                                       </div>
                                     ))}
                            </div>
                   </main>

       </div>
    </div>
  );
}