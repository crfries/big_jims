import custom from './media/custom.jpg'
import performance from './media/performance.jpg'
import repair from './media/repair.jpg'

function serviceData() {
  return [
    {
      text:
        'From hotrods to brand new vehicles, we can design and fabricate your dream exhaust system. We guarantee that every system will be unique and leave a smile on your face and those around you. Stop by today and let us help you and your vehicle get the exhaust it deserves.',
      img: custom,
    },
    {
      text:
        'We offer factory replacement systems from the top exhaust manufacturers in the industry. Whether you are a fan of Flowmaster, Magnaflow, or one of the many other option that are out there, we can get your vehicle sounding and performing the way you want. X-pipes, resonator deletes, and anything up to 4 inch piping will get your vehicle sounding and performing at its peak performance.',
      img: performance,
    },
    {
      text:
        'Have you recently failed to pass emissions? Have a broken hanger or blown out muffler? Catalytic Convertors are one of the main culprits for exhaust issues. Bring your vehicle in to Big Jim’s Custom Exhaust so we can get you back on the road and enjoying your vehicle.',
      img: repair,
    },
  ]
}
export default serviceData
