import React from 'react'
import TableView from 'react-native-tableview'

const { Section, Item, DisclosureButton } = TableView

const ListView = () => (
                        <TableView
                        style={{ flex: 1 }}
                        allowsToggle
                        allowsMultipleSelection
                        tableViewStyle={TableView.Consts.Style.Grouped}
                        tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
                        backgroundColor={'#2E9298'}
                        onPress={({ label }) => alert(label)}
                        onAccessoryPress={() => {}}
                        >
                        <Section label="Top Movie of the Week" arrow>
                        <Item accessoryType={DisclosureButton} onAccessoryPress={() => alert('You Pressed my button')} value="" detail="Star: Sam Worthington, Zoe Saldana">
                        Avatar:Special Edition
                        </Item>
                        <Item detail="Star: Leonardo DiCaprio, Ellen Page">Inception</Item>
                        <Item detail="Star: Anthony Gonzalez, Gael García Bernal">Coco</Item>
                        <Item detail="Star: Arnold Schwarzenegger, Linda Hamilton">Terminator 2: Judgment Day 3D</Item>
                        <Item detail="Star: Sunny Pawar, Dev Patel, Nicole Kidman">Lion</Item>
                        <Item detail="Star: Amy Adams, Jeremy Renner">Arrival</Item>
                        <Item detail="Star: Leonardo DiCaprio, Tom Hardy">The Revenant</Item>
                        <Item detail="Star: Harrison Ford, Mark Hamill, Carrie Fisher">Star Wars</Item>
                        <Item detail="Star: Johnny Depp, Benedict Cumberbatch">Black Mass</Item>
                        <Item detail="Star: Matthew McConaughey, Michael Caine">Interstellar</Item>
                        <Item detail="Star: Patrick Stewart, Ian McKellen">X-Men</Item>
                        <Item detail="Star: Sandra Bullock, George Clooney">Gravity-3D</Item>
                        <Item detail="Star: Ian McKellen, Martin Freeman">The Hobbit: The Desolation of Smaug</Item>
                        <Item detail="Star: Leonardo DiCaprio, Matthew McConaughey">The Wolf of Wall Street</Item>
                        <Item detail="Star: Shahab Hosseini, Taraneh Alidoosti">The Salesman</Item>
                        </Section>
                        
                        </TableView>
                        )

export default ListView

