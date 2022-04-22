import { render, screen } from '@testing-library/react'
import Options from '../Options'

test('displays image for each scoop option from server', ()=> {
    render(<Options optionType='scoops'/>)

    //find images
    //$ it ends with scoop
    const scoopImages = screen.getByRole('img', { name: /scoop$/i})
    expect(scoopImages).toHaveLength(2)

    //confirm alt text of images
    const altText = scoopImages.map((element)=> element.alt);
    expect(altText).toEqual(['Chocolate Scoop', 'Vanilla Scoop'])
})