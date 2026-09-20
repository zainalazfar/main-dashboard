export const CATEGORIES = [
  { id: 'all', label: 'All', countKey: 'all' },
  { id: 'apps', label: 'Apps', countKey: 'apps' },
  { id: 'courses', label: 'Courses', countKey: 'courses' },
  { id: '3d-stl', label: '3D / STL', countKey: '3d-stl' },
  { id: 'leathercraft', label: 'Leathercraft', countKey: 'leathercraft' }
];

export const ITEMS = [
  {
    id: 'snaptask-free',
    title: 'SnapTask',
    category: 'apps',
    status: 'Live',
    price: 'Free',
    shortDesc: 'Meeting task manager with clipboard image paste & Excel export.',
    longDesc: 'Built for high-speed workflow during meetings. Capture action items, paste screenshots directly from clipboard, automatically parse dates, and export formatted Excel sheets.',
    featured: true,
    tags: ['Desktop App', 'PWA', 'Excel Export', 'Task Manager'],
    emoji: '⚡',
    badgeClass: 'badge-apps',
    specs: [
      { key: 'Platform', val: 'Windows Desktop & Web' },
      { key: 'Technology', val: 'React 18 + Vite' },
      { key: 'Storage', val: '100% Local (Private)' }
    ],
    highlights: [
      'Direct clipboard image paste (Ctrl+V)',
      'Instant Excel export with formatted columns',
      'Live search and real-time status filtering',
      '1-Click Windows launcher included'
    ],
    primaryActionText: 'Launch App',
    actionType: 'snaptask-preview',
    localPath: 'c:\\Users\\Azfar\\Desktop\\SnapTask-Free'
  },
  {
    id: 'course-react-desktop',
    title: 'Desktop Apps with React & Tauri',
    category: 'courses',
    status: 'In Production',
    price: '$29',
    shortDesc: 'Video masterclass on building lightweight native desktop apps.',
    longDesc: 'Learn how to transition from standard web development to lightning-fast native desktop applications with Tauri and React. Covers local files, clipboard, native menus, and installers.',
    featured: true,
    tags: ['Video Masterclass', 'React', 'Tauri', 'Desktop Software'],
    emoji: '🎓',
    badgeClass: 'badge-courses',
    specs: [
      { key: 'Format', val: 'HD Video + Source Code' },
      { key: 'Duration', val: '14 Modules (4.5 hrs)' },
      { key: 'Level', val: 'Beginner to Intermediate' }
    ],
    curriculum: [
      { title: 'Module 1: Architecture & Setup', lessons: ['Tauri vs Electron', 'Vite Scaffolding', 'System Tray'] },
      { title: 'Module 2: Clipboard & Media', lessons: ['Screenshot Pasting', 'Lightbox Previews', 'Local Storage'] },
      { title: 'Module 3: Compiling & Distribution', lessons: ['Excel Generation', 'Windows .exe & MSI Packaging'] }
    ],
    highlights: [
      'Full project source code included',
      'Lifetime access with all updates',
      'Direct Discord maker community access'
    ],
    primaryActionText: 'View Course',
    actionType: 'course-modal'
  },
  {
    id: 'hex-desk-organizer',
    title: 'Modular Hex Desk Organizer',
    category: '3d-stl',
    status: 'STL File',
    price: '$4.99',
    shortDesc: 'Magnetic interlocking tray system for desk essentials & EDC tools.',
    longDesc: 'Engineered with embedded 6x2mm neodymium magnet cavities for modular snapping. Arrange your workspace in infinite honeycomb layouts.',
    featured: false,
    tags: ['3D Print', 'STL File', 'Desk Setup'],
    emoji: '⬡',
    badgeClass: 'badge-3d',
    specs: [
      { key: 'Format', val: '.STL + STEP Source' },
      { key: 'Print Time', val: '~2.5 hrs / cell' },
      { key: 'Infill', val: '15% Gyroid (PLA/PETG)' }
    ],
    highlights: [
      'Zero-support overhang design',
      'Pre-oriented for strength',
      'Commercial license available'
    ],
    primaryActionText: 'Get STL',
    actionType: 'detail-modal'
  },
  {
    id: 'pueblo-leather-bifold',
    title: 'Pueblo Leather Cardholder',
    category: 'leathercraft',
    status: 'Handmade',
    price: '$65',
    shortDesc: 'Italian Badalassi Carlo veg-tan leather, hand saddle-stitched.',
    longDesc: 'Unique rustic matte texture that patinas beautifully. Hand saddle-stitched with bonded Japanese polyester thread and finished with hand-burnished beeswax edges.',
    featured: true,
    tags: ['Leathercraft', 'Pueblo Leather', 'Saddle Stitched'],
    emoji: '🪡',
    badgeClass: 'badge-leather',
    specs: [
      { key: 'Tannery', val: 'Badalassi Carlo (Italy)' },
      { key: 'Capacity', val: '6-8 Cards + Cash' },
      { key: 'Stitching', val: 'Two-Needle Saddle Stitch' }
    ],
    highlights: [
      '100% full-grain vegetable tanned leather',
      'Indestructible hand saddle stitch',
      'Custom initials debossing available'
    ],
    primaryActionText: 'Order',
    actionType: 'contact-modal'
  },
  {
    id: 'course-digital-maker',
    title: 'The Digital Maker: CAD to Leathercraft',
    category: 'courses',
    status: 'Upcoming',
    price: '$39',
    shortDesc: 'How to design 3D stamps, acrylic guides & wet-molding bucks.',
    longDesc: 'Hands-on course showing makers how to leverage 3D printers to fabricate custom pricking iron guides, wet-molding bucks, and tools for leathercraft.',
    featured: false,
    tags: ['Video Course', 'Fusion 360', '3D Printing'],
    emoji: '🛠️',
    badgeClass: 'badge-courses',
    specs: [
      { key: 'Focus', val: 'Digital-Physical Making' },
      { key: 'Software', val: 'Fusion 360 / CAD' },
      { key: 'Includes', val: '3D Printable Tool STLs' }
    ],
    curriculum: [
      { title: 'Part 1: Precision CAD Templates', lessons: ['Stitch Allowance Calculations', 'Laser & 3D Stencils'] },
      { title: 'Part 2: 3D Wet-Molding Forms', lessons: ['2-Part Clamshell Molds', 'Leather Stretch Tolerances'] }
    ],
    highlights: [
      'Bridge 3D tech with analog craftsmanship',
      'Downloadable CAD files and print files',
      'Private maker feedback forum'
    ],
    primaryActionText: 'View Course',
    actionType: 'course-modal'
  },
  {
    id: 'leather-desk-mat',
    title: 'Veg-Tanned Leather Desk Mat',
    category: 'leathercraft',
    status: 'In Stock',
    price: '$110',
    shortDesc: 'Heavyweight full-grain Italian leather with hand-burnished edges.',
    longDesc: 'Natural workspace surface offering smooth mouse glide and soft wrist cushioning. Treated with natural wax to resist daily spills while gaining rich patina.',
    featured: false,
    tags: ['Leathercraft', 'Desk Setup', 'Full Grain'],
    emoji: '🪵',
    badgeClass: 'badge-leather',
    specs: [
      { key: 'Size', val: '80cm x 40cm' },
      { key: 'Thickness', val: '2.5mm Heavyweight' },
      { key: 'Backing', val: 'Non-Slip Suede' }
    ],
    highlights: [
      'Smooth sensor tracking for optical mice',
      'Natural water-resistant wax buff finish',
      'Includes roll strap for storage'
    ],
    primaryActionText: 'Order',
    actionType: 'contact-modal'
  },
  {
    id: 'ergonomic-edc-stand',
    title: 'Folding EDC Phone Stand',
    category: '3d-stl',
    status: 'STL File',
    price: '$3.50',
    shortDesc: 'Print-in-place pocket stand for phone & tablet with cable slot.',
    longDesc: 'Compact fold-flat design with dual angle settings (45° and 60°) and cable channel for charging. Zero supports needed.',
    featured: false,
    tags: ['3D Print', 'STL', 'EDC'],
    emoji: '📱',
    badgeClass: 'badge-3d',
    specs: [
      { key: 'Supports', val: 'Zero (Print-in-Place)' },
      { key: 'Print Time', val: '1 hr 15 mins' },
      { key: 'Material', val: 'PLA / PETG' }
    ],
    highlights: [
      'Pre-assembled print-in-place hinge',
      'Ultra-thin fold flat geometry',
      'Multi-color 3MF included'
    ],
    primaryActionText: 'Get STL',
    actionType: 'detail-modal'
  },
  {
    id: 'leather-edc-pocket-slip',
    title: 'Molded EDC Pocket Slip',
    category: 'leathercraft',
    status: 'Handmade',
    price: '$52',
    shortDesc: 'Form-fitted pocket caddy for knife, pen & flashlight.',
    longDesc: 'Wet-molded to shape using vegetable-tanned harness leather for a snug retention fit. Slim profile sits flat in pockets.',
    featured: false,
    tags: ['Leathercraft', 'EDC Organizer', 'Wet Molded'],
    emoji: '🔦',
    badgeClass: 'badge-leather',
    specs: [
      { key: 'Leather', val: 'Wickett & Craig Harness' },
      { key: 'Fit', val: '3.5"-4" Knives & Pens' },
      { key: 'Hardware', val: 'Solid Brass Eyelet' }
    ],
    highlights: [
      'Eliminates pocket bulk & clutter',
      'Durable weather-resistant wax finish',
      'Custom sizing on request'
    ],
    primaryActionText: 'Order',
    actionType: 'contact-modal'
  },
  {
    id: 'snaptask-cloud',
    title: 'SnapTask Cloud & Pro',
    category: 'apps',
    status: 'Upcoming',
    price: 'TBA',
    shortDesc: 'Multi-device cloud sync and automated meeting transcripts.',
    longDesc: 'Expanding SnapTask into seamless multi-device sync with end-to-end encryption, calendar integration, and AI meeting summaries.',
    featured: false,
    tags: ['Cloud Sync', 'Team Collaboration'],
    emoji: '☁️',
    badgeClass: 'badge-apps',
    specs: [
      { key: 'Platforms', val: 'Web, Windows, macOS, Mobile' },
      { key: 'Sync', val: 'End-to-End Encrypted' }
    ],
    highlights: [
      'Instant sync between desktop & phone',
      'Voice meeting transcription to task items',
      'Team workspace sharing'
    ],
    primaryActionText: 'Preview',
    actionType: 'detail-modal'
  }
];

export const CREATOR_INFO = {
  name: 'Azfar',
  role: 'Software Developer & Maker',
  bio: 'Software, 3D printing & artisanal leathercraft.'
};
