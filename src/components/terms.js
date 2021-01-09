import React from 'react';

export default function Terms(){
    return(
        <React.Fragment>

    
        <div>
        <div className="mt-12 mb-6 text-2xl">
        <h2 className="text-center">Delivery Timelines</h2>
        </div>
        
        <div className="md:px-32">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
            <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-2xl"></th>
                <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-2xl">Express</th>
                <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-2xl">Standard Shipping</th>
                <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-2xl">Other</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
            <tr>
                <td className="w-1/3 text-left py-3 px-4 text-xl uppercase">Juba</td>
                <td className="w-1/3 text-left py-3 px-4">Smith</td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
            </tr>
            <tr className="bg-gray-100">
                <td className="w-1/3 text-left py-3 px-4 text-xl uppercase">Greater Juba</td>
                <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
            </tr>
            <tr>
                <td className="w-1/3 text-left py-3 px-4 text-xl uppercase">Upcountry</td>
                <td className="w-1/3 text-left py-3 px-4">Williams</td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
            </tr>
            </tbody>
            </table>
        </div>
        </div>
        </div>
        
        </React.Fragment>
    )
}