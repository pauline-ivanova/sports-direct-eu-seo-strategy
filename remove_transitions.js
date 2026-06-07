const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\anato\\Documents\\PROJECTS\\Sports Direct UK\\presentation\\src\\components\\sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove import
  content = content.replace(/import \{ StoryTransition \} from "@\/components\/ui\/StoryTransition";\r?\n/g, '');
  
  // Remove component usage
  content = content.replace(/\s*<StoryTransition text="[^"]+" \/>/g, '');
  
  // Reduce space-y-8 to space-y-6 for better fit
  content = content.replace(/className="space-y-8"/g, 'className="space-y-6"');
  
  // Reduce space-y-12 to space-y-6 (in Roadmap)
  content = content.replace(/space-y-12 pb-8/g, 'space-y-6 pb-4');

  fs.writeFileSync(filePath, content);
});

console.log("Processed all files.");
