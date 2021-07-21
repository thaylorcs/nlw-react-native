import React from 'react';
import { FlatList, View } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do GTA',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Galera do GTA',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Galera do GTA',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Galera do GTA',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'Galera do GTA',
            icon: 'image.png',
            owner: true
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                style={styles.guilds}
            />
        </View>
    )
}