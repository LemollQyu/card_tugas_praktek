import Card from "./components/card"
function App() {


  return (
    <>
      <h1 className="underline font-bold text-xl ml-5 mb-5">Product</h1>

      <div className="border max-w-min p-5 flex gap-5">

        <Card srcImg="./1.jpg" nameProduct="Sepatu" harga="$23.00" />
        <Card srcImg="./2.jpg" nameProduct="Baju" harga="$25.00" />
        <Card srcImg="./3.jpg" nameProduct="Celana" harga="$30.00" />
      </div>
    </>
  )
}

export default App
