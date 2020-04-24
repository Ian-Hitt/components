import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Box, Button, ButtonGroup, Flex, Heading, Text } from '../../src';
import { CanvasContext } from '../../src/Canvas';
import { Page, PageContent } from '../../src/Page';
import { AppShell } from './components/AppShell';
import { FilterMenuForm } from './components/FilterMenuForm';

function StyleGuide(props) {
    const [formValue, setFormValue] = useState(null);
    const { togglePanel, setPanel } = useContext(CanvasContext);

    useEffect(() => {
        setPanel('filter', () => ({
            name: 'filter',
            position: 'left',
            ranges: {
                isOverlay: [0, 1024],
                allowMinify: false,
                defaultVisible: false,
                defaultMinified: false,
            },
            render: componentProps => <FilterMenuForm onSubmit={val => setFormValue(val)} />,
            bg: 'navBg',
        }));

        setPanel('messages', () => ({
            name: 'messages',
            position: 'right',
            ranges: {
                isOverlay: [0, 9999],
                allowMinify: false,
                defaultVisible: false,
                defaultMinified: false,
            },
            render: componentProps => <FilterMenuForm onSubmit={val => setFormValue(val)} />,
            bg: 'navBg',
        }));
    }, []);

    return (
        <Page>
            <PageContent>
                <ButtonGroup w="100%">
                    <Button onClick={() => togglePanel('menu')}>Toggle Navigation Menu Canvas</Button>
                    <Button onClick={() => togglePanel('filter')}>Toggle Filter Canvas</Button>
                </ButtonGroup>

                <Flex justify="flex-end" w="100%">
                    <Button onClick={() => togglePanel('messages')}>Toggle Message Canvas</Button>
                </Flex>

                {formValue && (
                    <Box>
                        <Heading kind="h6">Filters applied</Heading>
                        {Object.keys(formValue).map(key => {
                            return (
                                <Text>
                                    {key} : {formValue[key].toString()}
                                </Text>
                            );
                        })}
                    </Box>
                )}

                <Flex h={1500} w={50} bg="track" align="center">
                    for testing sticky header
                </Flex>
            </PageContent>
        </Page>
    );
}

ReactDOM.render(
    <AppShell>
        <StyleGuide />
    </AppShell>,
    document.getElementById('root')
);
