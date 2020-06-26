import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.blackMedium};
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const ImageItem = styled.View`
  margin-top: 10px;
`;

export const Image = styled.Image`
  width: 100%;
  aspect-ratio: 0.85;
`;

export const Description = styled.Text`
  padding: 15px;
  font-size: 20px;
  line-height: 18px;
  color: #fff;
`;

// export const Header = styled.View`
//   padding: 24px;
//   padding-top: ${getStatusBarHeight() + 24}px;
//   background: ${({ theme }) => theme.colors.blackMedium};

//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const HeaderTitle = styled.Text`
//   color: ${({ theme }) => theme.colors.white};
//   font-size: 20px;
//   font-family: ${({ theme }) => theme.fonts.regular};
//   line-height: 28px;
// `;

// export const UserName = styled.Text`
//   color: ${({ theme }) => theme.colors.orange};
//   font-family: ${({ theme }) => theme.fonts.medium};
// `;

// export const ProfileButton = styled.TouchableOpacity``;

// export const UserAvatar = styled.Image`
//   width: 56px;
//   height: 56px;
//   border-radius: 28px;
// `;

// export const ImagesList = styled(FlatList as new () => FlatList<Image>)`
//   padding: ${getStatusBarHeight() + 24}px 24px 16px;
//   width: 40%;
// `;

// export const ImagesListTitle = styled.Text`
//   font-size: 24px;
//   margin-bottom: 24px;
//   color: ${({ theme }) => theme.colors.white};
//   font-family: ${({ theme }) => theme.fonts.medium};
// `;

// export const ImageContainer = styled(RectButton)`
//   background: ${({ theme }) => theme.colors.shape};
//   border-radius: 10px;
//   padding: 20px;
//   margin-bottom: 16px;
//   flex-direction: row;
//   align-items: center;
// `;

// export const ImageAvatar = styled.Image`
//   width: 100px;
//   height: 72px;
// `;

// export const ImageInfo = styled.View`
//   flex: 1;
//   margin-left: 24px;
// `;

// export const ImageName = styled.Text`
//   font-family: ${({ theme }) => theme.fonts.medium};
//   color: ${({ theme }) => theme.colors.white};
//   font-size: 18px;
// `;

// export const ImageMeta = styled.View`
//   flex-direction: row;
//   align-items: center;
//   margin-top: 8px;
// `;

// export const ImageMetaText = styled.Text`
//   margin-left: 8px;
//   color: ${({ theme }) => theme.colors.gray};
//   font-family: ${({ theme }) => theme.fonts.regular};
// `;
