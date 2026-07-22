// Utility Types
// Partial<T> makes all propereties optional
// Required<T> all properties required even optional ones
// Pick<T,keys> pick and uses only we want it
// Omit<T,keys> removes keys that we don't want it

// 1. THE BASE TYPE (The Single Source of Truth)
interface Product {
  id: string;
  title: string;
  price: number;
  description?: string;
  isInStock?: boolean;
}

// 2. OMIT: Creating a new product
// Omit<T,keys>
// removes spesific keys in new type
type CreateProductPayload = Omit<Product, 'id'>;
/* Result:
  { title: string; price: number; description?: string; isInStock?: boolean }
*/

// 3. PARTIAL: Updating a product
// We make every field from the CreatePayload optional.
type UpdateProductPayload = Partial<CreateProductPayload>;
/* Result:
  { title?: string; price?: number; description?: string; isInStock?: boolean }
*/

// 4. PICK: Public View
// We PICK only the fields the UI needs to render the card.
type ProductCardView = Pick<Product, 'id' | 'title' | 'price'>;
/* Result:
  { id: string; title: string; price: number }
*/

// 5. REQUIRED: Database Strict Mode
// even the ones that are usually optional. REQUIRED strips away all the `?` modifiers.
type StrictDbProduct = Required<Product>;
/* Result:
  { id: string; title: string; price: number; description: string; isInStock: boolean }
*/