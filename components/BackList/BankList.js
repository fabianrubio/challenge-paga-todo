import React, {useState, useEffect, Fragment, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {DBContext, APIContext} from '../../context';
import {Loader} from '../Loader';

/**
 * Encapsulates the API call logic and stores the data locally
 */
const useBankList = () => {
  const [bankList, setBankList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(true);
  const {db} = useContext(DBContext);
  const {api} = useContext(APIContext);

  useEffect(() => {
    const getBankList = async () => {
      const result = await db.loadData();

      if (result != null) {
        setBankList(result);
        setloading(false);

        return;
      }

      try {
        const result = await api.getBankList();

        await db.storeData(result);

        setloading(false);
        setBankList(result);
      } catch (error) {
        if (error.response) {
          setError(true);
        }
      }
    };

    getBankList();
  }, []);

  return {loading, bankList, error};
};

const BankList = () => {
  const {loading, bankList, error} = useBankList();

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {!error ? (
        <Fragment>
          <View style={styles.alignContent}>
            <Text style={styles.mainTitle}>List of Banks</Text>
          </View>
          {bankList.map((b, i) => {
            return (
              <Card key={i} containerStyle={styles.card}>
                <ListItem
                  titleStyle={styles.font}
                  subtitleStyle={styles.font}
                  key={i}
                  leftAvatar={{source: {uri: b.url}}}
                  title={b.bankName}
                  subtitle={b.description}
                  badge={{
                    value: b.age,
                    badgeStyle: styles.badgeStyle,
                  }}
                />
              </Card>
            );
          })}
        </Fragment>
      ) : (
        <Fragment>
          <View style={styles.alignContent}>
            <Text style={styles.errorTitle}>Oops!, an error occurred</Text>
          </View>
        </Fragment>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Poppins-Regular',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  mainTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  alignContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeStyle: {
    backgroundColor: '#06bed6',
    fontFamily: 'Poppins-Regular',
  },
  errorTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#dc3545',
  },
});

export default BankList;
