import { contactTypes } from "@/types/componenttypes";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black text-white border border-gray-300">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Company</th>
              <th className="py-2 px-4 border-b">Country</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Postal Code</th>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">Message</th>
            </tr>
          </thead>
          <tbody>
            {props.contactData.map((item, index) => {
              return (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.email}</td>
                  <td className="py-2 px-4 border-b">{item.phone}</td>
                  <td className="py-2 px-4 border-b">{item.company}</td>
                  <td className="py-2 px-4 border-b">{item.country}</td>
                  <td className="py-2 px-4 border-b">{item.city}</td>
                  <td className="py-2 px-4 border-b">{item.address}</td>
                  <td className="py-2 px-4 border-b">{item.postalCode}</td>
                  <td className="py-2 px-4 border-b">{item.topic}</td>
                  <td className="py-2 px-4 border-b">{item.message}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
