import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
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

  const router = useRouter();

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
    } catch (error) {}
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
            value={searchingCard}
            onChange={(evt) => setSearchingCard(evt.target.value)}
            placeholder="Case Sensitive"
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
            {users.map((user: any, index) => (
              <Link href={`/user-profile?user=${user.id}`} key={index}>
                <User>
                  <ProfilePicture>
                    <img src="/magic.jpg" alt="profile-photo" />
                  </ProfilePicture>
                  <Info>
                    <strong>{user.name}</strong>
                    <span>{user.city}</span>
                    <p>{user.cellphone}</p>
                  </Info>
                </User>
              </Link>
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
