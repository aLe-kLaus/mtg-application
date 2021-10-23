import React, { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import userServices from "../../services/userServices";
import { Context } from "../_app";
import {
  Container,
  Header,
  UsersContainer,
  SearchBar,
  SearchContainer,
  User,
  ProfilePicture,
  Users,
  Info,
} from "./styles";

const CardSearcher = (): JSX.Element => {
  const { paddingLeft } = useContext(Context);
  const [searchingCard, setSearchingCard] = useState("");
  const [searchedCard, setSearchedCard] = useState("");
  const [usersNotFound, setUsersNotFound] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    setSearchedCard(searchingCard);
    try {
      const response: any = await userServices.getUsersByCardName(
        searchingCard
      );
      if (response?.data?.length === 0) {
        setUsers([]);
        setUsersNotFound(true);
      } else {
        setUsers(response.data);
        setUsersNotFound(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ paddingLeft }}>
      <Header>
        <Title
          title="Here, you can search for any card, and see if anyone have it in order to sell or trade with you!"
          color="#000000"
        />
      </Header>
      <SearchContainer>
        <SearchBar>
          <input
            type="text"
            name="cardSearcher"
            placeholder="Search For Any Card"
            value={searchingCard}
            onChange={(evt) => setSearchingCard(evt.target.value)}
          />
          <Button label="Search" name="searchCard" onClick={handleSearch} />
        </SearchBar>
      </SearchContainer>
      <UsersContainer>
        {!usersNotFound && users.length > 0 && (
          <Title
            title="This are the users that are willing to trade/sell"
            color="#000000"
          />
        )}
        {!usersNotFound ? (
          <Users>
            {users.map((user: any) => (
              <User key={user.id}>
                <ProfilePicture>
                  <img src="/magic-card-back.jpg" alt="profile-photo" />
                </ProfilePicture>
                <Info>
                  <strong>{user.name}</strong>
                  <span>{user.city}</span>
                  <p>{user.cellphone}</p>
                </Info>
              </User>
            ))}
          </Users>
        ) : (
          <Title
            title={`We don't found any users that have the card: ${searchedCard}`}
            color="#000"
          ></Title>
        )}
      </UsersContainer>
    </Container>
  );
};

export default CardSearcher;
