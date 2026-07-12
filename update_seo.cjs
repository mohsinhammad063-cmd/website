const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/<Route path="\/products" element=\{<><SEO [^>]+ \/><Shop \/><\/>\} \/>/g, '<Route path="/products/:slug" element={<><SEO title="Product | Tips & Tricks by Master Hammad" description="Official gaming tips products." url="https://hammad-s-guide.web.app/products" /><ProductDetail /></>} />');
content = content.replace(/<Route path="\/free-resources" element=\{<><SEO [^>]+ \/><FreeResources \/><\/>\} \/>/g, '<Route path="/free-resources" element={<><SEO title="Free Resources | Tips & Tricks by Master Hammad" description="Downloadable resources for parents and kids." url="https://hammad-s-guide.web.app/free-resources" /><FreeResources /></>} />\n            <Route path="/free-resources/:slug" element={<><SEO title="Free Resource | Tips & Tricks by Master Hammad" description="Downloadable resources for parents and kids." url="https://hammad-s-guide.web.app/free-resources" /><ResourceDetail /></>} />');

// also import ProductDetail and ResourceDetail
content = content.replace(/import Shop from '.\/pages\/Shop';/g, "import Shop from './pages/Shop';\nimport ProductDetail from './pages/ProductDetail';\nimport ResourceDetail from './pages/ResourceDetail';");

// fix slug params in App.tsx
content = content.replace(/path="\/tips\/:id"/g, 'path="/tips/:slug"');
content = content.replace(/path="\/guides\/:id"/g, 'path="/guides/:slug"');

fs.writeFileSync('src/App.tsx', content);
